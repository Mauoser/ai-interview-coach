import { BrowserRouter, Routes, Route } from "react-router";
import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectedRoutes from "@/layouts/protected-routes";
import { MainLayout } from "@/layouts/main-layout";
import HomePage from "@/routes/home";
import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signin/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout></MainLayout>
            </ProtectedRoutes>
          }
        >
          {/* add all protected routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
