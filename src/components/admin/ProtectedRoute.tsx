import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../services/firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] =
    useState(true);

  const [authenticated,
    setAuthenticated] =
    useState(false);

  useEffect(() => {
    console.log(
      "ProtectedRoute mounted"
    );

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {
          console.log(
            "Auth callback fired",
            user
          );

          setAuthenticated(
            !!user
          );

          setLoading(false);
        },
        (error) => {
          console.error(
            "Auth error:",
            error
          );

          setLoading(false);
        }
      );

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(
    "Loading:",
    loading
  );

  console.log(
    "Authenticated:",
    authenticated
  );

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <>{children}</>;
}