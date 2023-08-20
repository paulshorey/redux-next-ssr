export default async function ipAddress() {
    const ip = (await (await fetch('https://api-bdc.net/data/client-ip')).json())?.ipString;
    if (!ip) {
        return {ip: '', address: '', isp: ''};
    }
    const url = 'https://corsproxy.io/?' + encodeURIComponent(`http://ip-api.com/json/${ip}`);
    const response = await fetch(url);
    const info = await response.json();
    return {
        ip,
        city: `${info.city}, ${info.region} ${info.zip}`,
        country: info.countryCode,
        isp: info.isp,
    };
}
