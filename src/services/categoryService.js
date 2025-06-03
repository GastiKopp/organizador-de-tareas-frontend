import axios from "axios";

export const getCategorias = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/categorias");

    return response.data;
  } catch (error) {
    console.error("Error al obtener las categorías", error);
    return [];
  }
};
