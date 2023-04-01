import ReactGA from "react-ga";

const trackerEvent = (label, category="Sikurama") => {
  const trackEvent = ReactGA.event({
    category,
    action: 'click',
    label
  });
  return trackEvent;
}

const visitedPage = (url) => {
  if (!url) return;
  const pageView = ReactGA.pageview(url);
  return pageView
}

export {
  trackerEvent,
  visitedPage
};