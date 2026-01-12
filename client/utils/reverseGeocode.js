export async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&lat=${lat}&lon=${lon}`;
  const res = await fetch(url, { headers: { "Accept-Language": "en" } });
  if (!res.ok) throw new Error("Reverse geocoding failed");
  const data = await res.json();

  const a = data.address ?? {};
  const road = a.road ?? a.pedestrian ?? a.footway ?? a.residential ?? "";
  const house = a.house_number ?? "";
  const line = [road, house].filter(Boolean).join(" ").trim();
  return line || data.display_name || `${lat.toFixed(5)} , ${lon.toFixed(5)}`;
}
