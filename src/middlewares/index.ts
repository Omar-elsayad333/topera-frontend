import AuthMiddleware from "@/middlewares/authMiddleware";

// Ordering is important
export const middlewares = [AuthMiddleware];
