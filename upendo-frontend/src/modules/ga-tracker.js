import {useEffect} from "react";
import ReactGA from "react-ga";
import {withRouter} from "react-router";
import PropTypes from "prop-types";
/**
 * An HOC that wraps the routes in order to send
 * google analytics.  Code is based off of thread on github
 * for usage of react-ga with React Router.
 */

function sendPageView(location) {
  ReactGA.set({page: location.pathname});
  ReactGA.pageview(location.pathname);
}

function GAListener({children, trackingId, history}) {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    sendPageView(history.location);
    return history.listen(sendPageView);
  }, [history, trackingId]);

  return children;
}

GAListener.propTypes = {
  children: PropTypes.node,
  trackingId: PropTypes.string,
  history: PropTypes.shape({
    listen: PropTypes.func,
  }),
};

export default withRouter(GAListener);