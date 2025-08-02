export async function GET() {
  const response = await fetch("https://api.github.com/repos/PixiEditor/PixiEditor/releases/latest");
  
  if (!response.ok) {
    return new Response(JSON.stringify({ version: "check failed", assets: [] }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  const data = await response.json();

  const relevantAssets = data.assets.map(asset => {
    const splitted = asset.name.split("-");
    if (splitted.length < 4) return null;

    const architecture = splitted[2];
    let platform = splitted[3];
    let extension = asset.name.split(".").pop();

    if (extension === "gz") extension = "tar.gz";
    if (platform.includes(".")) platform = platform.split(".")[0];

    return {
      platform,
      architecture,
      option: extension,
      downloadUrl: asset.browser_download_url
    };
  }).filter(Boolean);

  return new Response(JSON.stringify({
    version: data.tag_name,
    assets: relevantAssets
  }), {
    headers: { "Content-Type": "application/json" }
  });
}