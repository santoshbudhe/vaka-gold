import { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { auth } from "../../services/firebase";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/leads");
    } catch (error) {
      console.error(error);

      alert(
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#F8F6F3]
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-xl
          bg-white
          p-6
          shadow-lg
        "
      >
        <h1
          className="
            mb-6
            text-center
            text-3xl
            font-bold
          "
        >
          VAKA GOLD Admin
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="
            mb-3
            w-full
            rounded-lg
            border
            p-3
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="
            mb-4
            w-full
            rounded-lg
            border
            p-3
          "
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full
            rounded-lg
            bg-[#021B35]
            py-3
            font-semibold
            text-white
          "
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>
      </div>
    </div>
  );
}