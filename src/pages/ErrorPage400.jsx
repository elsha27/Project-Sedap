import ErrorPage from "../components/ErrorPage";

export default function ErrorPage400() {
  return (
    <ErrorPage
      code="400"
      message="Permintaan tidak valid. Silakan periksa kembali input Anda."
      image="/img/400.png" 
    />
  );
}
