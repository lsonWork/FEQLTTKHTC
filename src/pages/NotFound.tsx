import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mantine/core";
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-muted-foreground mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Trang không tìm thấy
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mb-8 text-lg">
          Trang bạn đang tìm không tồn tại.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2">
            Về trang chủ
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="px-6 py-2">
            Quay lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
