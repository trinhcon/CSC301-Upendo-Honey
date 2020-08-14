// Static content
import { Notifications } from '../content';

// React librairies
import {NotificationManager} from 'react-notifications';


/**
 * Function that generates a notification on a page, currently just
 * displays a warning whenever the application defaults to PUREJOY, as
 * well as a brief explanation of why.  Time for display of warnings is
 * set to 5s as default.
 */
function generateWarning(type, time=5000) {
    NotificationManager.warning(type, Notifications.defaultMessage, time);
}

export default generateWarning;