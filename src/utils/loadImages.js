// Carga todas las imágenes en las diferentes carpetas
function importAll(r) {
  return r.keys().map(r);
}

const imagesByCategory = {
  masks: importAll(
    require.context("../assets/gallery/masks", false, /\.(png|jpe?g|svg)$/)
  ),
  sculptures: importAll(
    require.context("../assets/gallery/sculptures", false, /\.(png|jpe?g|svg)$/)
  ),
  collages: importAll(
    require.context("../assets/gallery/collage", false, /\.(png|jpe?g|svg)$/)
  ),
  performance: importAll(
    require.context("../assets/gallery/perfomance", false, /\.(png|jpe?g|svg)$/)
  ),
};

export default imagesByCategory;
