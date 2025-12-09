// src/middlewares/validateRequest.js
import { getRegistrationSchemaByRole } from "../validators/registration.validator.js";
import { HttpError } from "../utils/httpError.js";

export function validateRegistration(req, res, next) {
  const { role } = req.params;

  const schema = getRegistrationSchemaByRole(role);
  if (!schema) {
    return next(new HttpError(400, "Invalid registration role"));
  }

  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    // podes trocar para next(new HttpError(...)) se preferires
    return res.status(400).json({
      error: "Validation failed",
      details: errors,
    });
  }

  // body validado e limpo
  req.validatedBody = result.data;
  next();
}
