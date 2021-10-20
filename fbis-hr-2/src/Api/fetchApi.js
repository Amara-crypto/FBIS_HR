export const BaseURL = {
    Api: 'http://127.0.0.1:5000',
}


export const HandleAllRequest = async (URL, type, access_token, jsonData) => {
    const request = type;
    //Make a switch case here...
    switch (request) {
      case "post":
        let postUrl = BaseURL.Api + URL;
        let postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
        postHeaders.append("Accept", "application/json");
        postHeaders.append("Authorization", `Bearer ${access_token}`);
        let postOptions = {
          method: "POST",
          headers: postHeaders,
          body: JSON.stringify(jsonData),
          redirect: "follow",
        };
        let postResponse = await fetch(postUrl, postOptions);
        if (postResponse.status === 401) {
          localStorage.clear();
          sessionStorage.clear();
          window.location.replace("/");
        }
        return postResponse.json();
  
      case "put":
        let putUrl = BaseURL.Api + URL;
        let putHeaders = new Headers();
        putHeaders.append("Content-Type", "application/json");
        putHeaders.append("Accept", "application/json");
        putHeaders.append("Authorization", `Bearer ${access_token}`);
        let putOptions = {
          method: "PUT",
          headers: putHeaders,
          body: JSON.stringify(jsonData),
          redirect: "follow",
        };
        let putResponse = await fetch(putUrl, putOptions);
        return putResponse.json();
  
      case "patch":
        let patchUrl = BaseURL.Api + URL;
        let patchHeaders = new Headers();
        patchHeaders.append("Content-Type", "application/json");
        patchHeaders.append("Accept", "application/json");
        patchHeaders.append("Authorization", `Bearer ${access_token}`);
        let patchOptions = {
          method: "PATCH",
          headers: patchHeaders,
          body: JSON.stringify(jsonData),
          redirect: "follow",
        };
        let patchResponse = await fetch(patchUrl, patchOptions);
        return patchResponse.json();
  
      case "get":
        let getUrl = BaseURL.Api + URL;
        let getHeaders = new Headers();
        getHeaders.append("Content-Type", "application/json");
        getHeaders.append("Accept", "application/json");
        getHeaders.append("Authorization", `Bearer ${access_token}`);
        let getOptions = {
          method: "GET",
          headers: getHeaders,
          redirect: "follow",
        };
        let getResponse = await fetch(getUrl, getOptions);
        if (getResponse.status === 401) {
          localStorage.clear();
          sessionStorage.clear();
          window.location.replace("/");
        }
        return getResponse.json();
  
      case "delete":
        let deleteUrl = BaseURL.Api + URL;
        let deleteHeaders = new Headers();
        deleteHeaders.append("Content-Type", "application/json");
        deleteHeaders.append("Accept", "application/json");
        deleteHeaders.append("Authorization", `Bearer ${access_token}`);
        let deleteOptions = {
          method: "DELETE",
          headers: deleteHeaders,
          // body: JSON.stringify(jsonData),
          redirect: "follow",
        };
        let deleteResponse = await fetch(deleteUrl, deleteOptions);
  
        return deleteResponse.json();
  
      default:
        return null;
    }
  };
  