import ErrorPage from "../components/ErrorPage";

export default function ErrorPage401() {
  return (
    <ErrorPage
      code="401"
      message="Anda belum login. Silakan login untuk melanjutkan."
      image="/img/401.png"
    />
  );
}

