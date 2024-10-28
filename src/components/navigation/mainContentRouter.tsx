import { Routes, Route } from "react-router-dom";
import { PageLayout } from "../pageLayout/pageLayout";
import { Home } from "../../pages/home";
import { AboutMe } from "../../pages/aboutMe";
import { HandleEvents } from "../../pages/handleEvents";
import { ComponentMemory } from "../../pages/componentMemory";
import { RenderCommit } from "../../pages/renderCommit";
import { StateAsSnapshot } from "../../pages/stateAsSnapshot";
import { UpdateObject } from "../../pages/updateObject";
import { UpdateArrays } from "../../pages/updateArrays";
import { QueueMultipleUpdates } from "../../pages/QueueMultipleUpdates";
import { UseEffectTutorial } from "../../pages/useEffectTutorial";
import { ManageComplexApplicationsRedux } from "../../pages/manageComplexApplicationsRedux";

export const MainContentRouter = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Routes>
        <Route path="/handle-events" element={<HandleEvents />} />
      </Routes>
      <Routes>
        <Route path="/component-memory" element={<ComponentMemory />} />
      </Routes>
      <Routes>
        <Route path="/render-and-commit" element={<RenderCommit />} />
      </Routes>
      <Routes>
        <Route path="/state-as-a-snapshot" element={<StateAsSnapshot />} />
      </Routes>
      <Routes>
        <Route
          path="/queue-multiple-updates"
          element={<QueueMultipleUpdates />}
        />
      </Routes>
      <Routes>
        <Route path="/update-object" element={<UpdateObject />} />
      </Routes>
      <Routes>
        <Route path="/update-arrays" element={<UpdateArrays />} />
      </Routes>
      <Routes>
        <Route path="/use-effect" element={<UseEffectTutorial />} />
      </Routes>
      <Routes>
        <Route
          path="/react-redux"
          element={<ManageComplexApplicationsRedux />}
        />
      </Routes>
    </PageLayout>
  );
};
