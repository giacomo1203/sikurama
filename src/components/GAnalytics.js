import ReactGA from "react-ga";

const trackerEvent = (label, category="Sikurama") => {
  const trackEvent = ReactGA.event({
    category,
    action: 'click',
    label
  });
  console.log(trackEvent);
  return trackEvent;
}

const visitedPage = (url) => {
  if (!url) return;
  const pageView = ReactGA.pageview(url);
  console.log(url);
  return pageView
}

export {
  trackerEvent,
  visitedPage
};