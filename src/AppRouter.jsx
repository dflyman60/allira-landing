import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import Admin from "./Admin";
import AwsMigrationJobs from "./pages/AwsMigrationJobs";
import CloudEngineerJobs from "./pages/CloudEngineerJobs";
import DevOpsJobs from "./pages/DevOpsJobs";
import PlatformEngineerJobs from "./pages/PlatformEngineerJobs";
import AwsSolutionsArchitectJobs from "./pages/AwsSolutionsArchitectJobs";
import InfrastructureEngineerJobs from "./pages/InfrastructureEngineerJobs";
import SiteReliabilityEngineerJobs from "./pages/SiteReliabilityEngineerJobs";
import CloudMigrationJobs from "./pages/CloudMigrationJobs";
import AwsJobs from "./pages/AwsJobs";

export default function AppRouter() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/aws-migration-jobs" element={<AwsMigrationJobs />} />
          <Route path="/cloud-engineer-jobs" element={<CloudEngineerJobs />} />
          <Route path="/devops-jobs" element={<DevOpsJobs />} />
          <Route path="/platform-engineer-jobs" element={<PlatformEngineerJobs />} />
          <Route path="/aws-solutions-architect-jobs" element={<AwsSolutionsArchitectJobs />} />
          <Route path="/infrastructure-engineer-jobs" element={<InfrastructureEngineerJobs />} />
          <Route path="/site-reliability-engineer-jobs" element={<SiteReliabilityEngineerJobs />} />
          <Route path="/cloud-migration-jobs" element={<CloudMigrationJobs />} />
          <Route path="/aws-jobs" element={<AwsJobs />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
