import proxy from "http-proxy-middleware";

export default function(app: any) {
  app.use(
    proxy("/api/v1", {
      target: "http://localhost:5000"
    })
  );
}
