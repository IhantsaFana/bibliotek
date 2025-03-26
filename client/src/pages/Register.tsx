import React, { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "Lecteur",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await register(formData);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Créer un compte</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Inscription réussie ! Redirection...</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          className="w-full p-2 border rounded"
          required
        />
        <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="Lecteur">Lecteur</option>
          <option value="Bibliothécaire">Bibliothécaire</option>
        </select>
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
