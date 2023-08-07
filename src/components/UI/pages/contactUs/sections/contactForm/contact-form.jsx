import { connect } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "../../../../../common/text-error";
import Image from "next/image";

function ContactForm({ contactUsImgs, t, tValidate }) {
  // Form
  const initialValues = {
    name: "",
    email: "",
    message: "",
    mailTo: "info@omegastream.net",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(tValidate.required),
    email: Yup.string().email(tValidate.invalid).required(tValidate.required),
    message: Yup.string().required(tValidate.required),
  });
  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  return (
    <section className="contact-form">
      <div className="container">
        <div className={`contact-form-left`}>
          <div className="hand-image">
            <Image
              src={contactUsImgs.formContactImg}
              alt="person send message"
            />
          </div>
        </div>
        <div className={`contact-form-right`}>
          <div className="form-header">
            <h3>{t.fromHeader}</h3>
            <p>{t.fromParagraph}</p>
          </div>
          <div className="form-box">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="form-fields">
                    <div className="contact-name-input">
                      <Field
                        type="text"
                        id="contact-name-input"
                        name="name"
                        placeholder={t.fromPlaceholder.name}
                      />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className="contact-email-input">
                      <Field
                        type="email"
                        id="contact-email-input"
                        name="email"
                        placeholder={t.fromPlaceholder.email}
                      />
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className="contact-message">
                      <Field
                        as="textarea"
                        id="contact-subject-input"
                        name="message"
                        placeholder={t.fromPlaceholder.message}
                      ></Field>
                      <ErrorMessage name="message" component={TextError} />
                    </div>
                  </div>
                  <button type="submit" className="contact-form-btn">
                    <span className="btn-send-span">{t.fromBtn}</span>
                    <span className="btn-icon">
                      <Image src={contactUsImgs.contactIcon4} alt="" />
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    contactUsImgs: state.allImages.pagesImgs.contactUsImgs,
  };
};

export default connect(mapStateToProps)(ContactForm);
