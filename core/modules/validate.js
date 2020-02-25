const Yup = require("yup");

const ValidateSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(20, "Too Short!")
    .required("Required")
});

module.exports = ValidateSchema;
