import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMeView from "./aboutMeView";
import ContactView from "./ContactView";
import PhotoGalleryView from "./PhotoGalleryView";
import PhotoGallery1View from '../../views/PhotoGallery1View'
import PhotoGallery2View from "../PhotoGallery2View";
import PhotoGallery3View from "../PhotoGallery3View";
import Main from "./RootView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <AboutMeView />
        </Route>
        <Route exact path="/contact">
          <ContactView />
        </Route>
        <Route exact path="/gallery">
          <PhotoGalleryView />
        </Route>

        <Route exact path="/gallery/choices">
          <h1>PhotoGalleryView </h1>
        </Route>

        <Route exact path="/gallery/gallery1">
          <PhotoGallery1View />
        </Route>

        <Route exact path="/gallery/gallery2">
        <PhotoGallery2View />
        </Route>

        <Route exact path="/gallery/gallery3">
        <PhotoGallery3View />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
