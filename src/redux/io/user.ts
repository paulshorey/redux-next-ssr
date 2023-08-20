import { userState } from "@/redux/reducers/user";

export async function ipIO(): Promise<userState> {
  const ip = (await (await fetch("https://api-bdc.net/data/client-ip")).json())?.ipString;
  if (!ip) {
    return { ip: "", city: "", region: "", zip: "", country: "", isp: "" };
  }
  const url = "https://corsproxy.io/?" + encodeURIComponent(`http://ip-api.com/json/${ip}`);
  const response = await fetch(url);
  const info = await response.json();
  return {
    ip,
    city: info.city,
    region: info.region,
    zip: info.zip,
    country: info.countryCode,
    isp: info.isp,
  };
}
