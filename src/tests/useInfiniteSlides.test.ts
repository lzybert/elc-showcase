import { useInfiniteSlides } from "../hooks/useInfiniteSlides.ts";
import { renderHook, waitFor } from "@testing-library/react";


const mockSlidesPage: ICardSite[] = [
  { id: 1, uniqueNumber: 101, name: 'Site 1', description: '', justification: '', danger: false, category: '', country: '', region: '', transboundary: false, lon: 0, lat: 0 },
  { id: 2, uniqueNumber: 102, name: 'Site 2', description: '', justification: '', danger: false, category: '', country: '', region: '', transboundary: false, lon: 0, lat: 0 },
];

describe('useInfiniteSlides', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should load the first page of slides', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: mockSlidesPage }),
        status: 200
      })
    );

    const { result } = renderHook(() => useInfiniteSlides());

    expect(result.current.loading).toBe(true);

    expect(global.fetch).toHaveBeenCalledWith('api/v1/sites?page=1&limit=10');
    await waitFor(() => {
      expect(result.current.slides).toEqual(mockSlidesPage);
      expect(result.current.loading).toBe(false);
    })
  });
});