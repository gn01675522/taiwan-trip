import styled from "styled-components";

export const CardOutline = styled.div`
  width: 100%;
  height: 100%;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "event" && "banner":
        return;
      default:
        return `cursor: pointer;`;
    }
  }}
`;
export const CardContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 23px 27px;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 980;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "banner":
        return;
      case "traffic":
        return `
        height: 1000px;
        `;
      case "hotEvent":
        return `
        padding: 16px;
        `;
      case "event":
        return `
        padding: 16px;
        `;
      case "food":
        return `
        padding: 12px;
        `;
      case "hotel":
        return `
        padding: 12px;
        `;
      case "scenicSpot":
        return `
        padding: 12px;
        `;
      default:
        throw new Error(
          `Unrecognized type of ${$pageType}, 
          this message is from shadowCard.styles.jsx's CardContent; 
          Please make sure every component what import this has a props passed contentType.`
        );
    }
  }}
`;

export const Shadow = styled.div`
  position: relative;
  width: 95%;
  background: url("data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI3NCIgdmlld0JveD0iMCAwIDEyODAgNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuMyIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8xM182MTE4KSI+CjxwYXRoIGQ9Ik0xMjg2IDExVjYzTDYwNi4yNjUgMTFIMTI4NloiIGZpbGw9IiMwRDBCMEMiLz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjMiIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2ZfMTNfNjExOCkiPgo8cGF0aCBkPSJNLTYuMDAwMTIgMTFWNjNMNjczLjczNSAxMUgtNi4wMDAxMloiIGZpbGw9IiMwRDBCMEMiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzEzXzYxMTgiIHg9IjU5NS4yNjUiIHk9IjAiIHdpZHRoPSI3MDEuNzM1IiBoZWlnaHQ9Ijc0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUuNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzEzXzYxMTgiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZl8xM182MTE4IiB4PSItMTciIHk9IjAiIHdpZHRoPSI3MDEuNzM1IiBoZWlnaHQ9Ijc0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUuNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzEzXzYxMTgiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  text-align: center;
  ${({ $contentType }) => {
    switch ($contentType) {
      case "banner":
        return `
        width: 100%;
        height: 74px;
        bottom: 30px;
        `;
      case "detail":
        return `
        height: 52px;
        bottom: 20px;
        `;
      case "traffic":
        return `
        height: 52px;
        bottom: 20px;
        `;
      case "large-list":
        return `
        height: 52px;
        bottom: 25px;
        `;
      case "me-list":
        return `
        height: 45px;
        bottom: 18px;
        `;
      case "sm-list":
        return `
        height: 24px;
        bottom: 5px;
        `;
      default:
        throw new Error(
          `Unrecognized type of ${$contentType}, 
          this message is from shadowCard.styles.jsx's Shadow; 
          Please make sure every component what import this has a props passed contentType.`
        );
    }
  }}
`;

export const HintText = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: 400;
  color: #acacac;
  top: 53px;
  left: 56px;
`;
