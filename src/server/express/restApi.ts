import express, { Application } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import * as fs from 'node:fs';
import { WorldHeritageSite } from '@/server/types/types.ts';
import path from 'path';
import { getElementOfTheDay, isNumber } from "@/utils/utils.ts";

const app: Application = express();

app.use(express.json({ limit: '20mb' }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Load data
const rawData = fs.readFileSync(path.join(__dirname, '..', 'data.json'), 'utf-8');
const jsonData: WorldHeritageSite[] = JSON.parse(rawData);

// Serve a successful response. For use with wait-on
app.get("/api/v1/health", (req, res) => {
  res.send({ status: "ok" });
});
// Helper: Localize site fields
const localizeSite = (site: WorldHeritageSite, lang: string) => ({
  uniqueNumber: site.unique_number,
  id: site.id_no,
  name: site[`name_${lang}`] || site.name_en,
  description: site[`short_description_${lang}`] || site.short_description_en,
  justification: site[`justification_${lang}`] || site.justification_en,
  country: site[`states_name_${lang}`] || site.states_name_en,
  category: site.category,
  region: site.region_en,
  criteria_txt: site.criteria_txt,
  lat: site.latitude,
  lon: site.longitude,
  danger: site.danger,
  transboundary: site.transboundary
});

// Endpoint: All sites (with pagination and region filter)
// @ts-ignore
app.get('/api/v1/sites', (req: Request, res: Response) => {
  const lang = (req.query.lang as string || 'en').toLowerCase();
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 2;
  const regionFilter = (req.query.region as string)?.toLowerCase();

  let filtered = [...jsonData];
  if (regionFilter) {
    filtered = filtered.filter(site => site.region_en.toLowerCase().includes(regionFilter));
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);
  const localized = paginated.map(site => localizeSite(site, lang));
  console.log({ page, limit, total: filtered.length, data: localized });
  return res.send({ page, limit, total: filtered.length, data: localized });
});

// @ts-ignore
app.get('/api/v1/sites/:id', (req: Request, res: Response)=> {
  const lang = (req.query.lang as string || 'en').toLowerCase();
  const id = parseInt(req.params.id);

  if (!isNumber(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  const site = jsonData.find(s => s.id_no === id);
  if (!site) {
    return res.status(404).json({ message: 'Site not found' });
  }
  else {
    return res.json(localizeSite(site, lang));
  }
});
// @ts-ignore
app.get('/api/v1/promo', (req: Request, res: Response)=> {
  const lang = (req.query.lang as string || 'en').toLowerCase();
  const promotedSite = getElementOfTheDay(jsonData);

  console.log(promotedSite)
  if (!promotedSite) {
    return res.status(404).json({ message: 'Site not found' });
  }
  else {
    return res.json(localizeSite(promotedSite, lang));
  }
});

app.use(express.static('./.local/vite/dist'));

export default app;
