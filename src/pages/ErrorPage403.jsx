import ErrorPage from "../components/ErrorPage";

export default function ErrorPage403() {
  return (
    <ErrorPage
      code="403"
      message="Akses ditolak. Anda tidak memiliki izin untuk melihat halaman ini."
      image="/img/403.png"
    />
  );
}