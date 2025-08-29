(async () => {
  try {
    alert(1);
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
    alert(jsonString)
  } catch (error) {
    console.error(error.message);
  }
})();
