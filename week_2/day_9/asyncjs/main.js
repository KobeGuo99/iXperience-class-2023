console.log("connected");

function fetchPosts(err) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        console.log("Success");
        console.log({
          name: "Kobe",
          surname: "Guo",
        });
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 3000);
  });
}

async function callAPI() {
    const url = "www.something.com";
  try {
    await fetchPosts(url, {
        method: 'GET',

    });
  } catch (err) {
    console.log(err);
  }
}

callAPI();
