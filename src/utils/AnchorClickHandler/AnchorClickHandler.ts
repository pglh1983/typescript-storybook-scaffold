/**
 * Have whatever react navigation library we use
 * handle link clicks rather than navigating
 * away from the page
 *
 * @param href URL or route for anchor
 * @param onNavigate Function to have navigation library handle the event
 * @return Function to handle a React click event
 */
export default function anchorClickHandler (href : string, onNavigate?: Function) {
  return function (e : MouseEvent) {
    // Only prevent default event if an onNavigate function
    // has been supplied
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  }
}
