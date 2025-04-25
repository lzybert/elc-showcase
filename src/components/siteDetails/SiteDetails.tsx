import DOMPurify from "dompurify";
import { RiEarthLine } from "@remixicon/react";
import {
  CardSiteWrapper,
  DetailsImageWrapper, DetailsLocationText, DetailsSmallText,
  DetailsTextLayer,
  GetDirectionsLink,
} from "@/components/siteDetails/SiteDetails.styles.ts";



const SiteDetails = ( props: ICardSite) => {
  const { description, category, country, region, lat, lon, justification } = props;

  return (
    <CardSiteWrapper className={`cardSite`}>
      <DetailsLocationText>
        <RiEarthLine size={16} />
        &nbsp;{country} / {region}
      </DetailsLocationText>
      <DetailsSmallText>Category: {category}</DetailsSmallText>
      <h3>Description</h3>
      <DetailsTextLayer dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
      <h3>Why it's a World Heritage Site</h3>
      <DetailsTextLayer dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(justification) }} />
      <DetailsImageWrapper>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&markers=${lat},${lon}&zoom=5&size=800x200&key=${import.meta.env.VITE_GOOGLE_API_KEY}`}
        />
      </DetailsImageWrapper>
      <GetDirectionsLink
        onClick={() =>
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`)
        }
      >
        Get Directions
      </GetDirectionsLink>
    </CardSiteWrapper>
  );
}

export default SiteDetails;