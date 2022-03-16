/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Radio from './Radio';

export function CosmeticForm({ styles, val }: any) {
  const cosmeticSchema = yup.object().shape({
    name: yup.string().required('Required'),
    amount: yup.number().required('Required').min(1, 'Too Short!'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        amount: '',
        testRadio: '',
      }}
      onSubmit={(values) => {
        console.log(values);

        val(values);
      }}
      validationSchema={cosmeticSchema}
    >
      <Form autoComplete="off">
        <label className={styles.label} htmlFor="Name">
          Name
        </label>
        <Field className={styles.field} id="name" name="name" />
        <ErrorMessage component="a" className={styles.errorMsg} name="name" />
        <label className={styles.label} htmlFor="Amount">
          Amount
        </label>
        <Field
          type="number"
          className={styles.field}
          id="amount"
          name="amount"
        />
        <ErrorMessage component="a" className={styles.errorMsg} name="amount" />
        <Radio label="one" name="testRadio" value="one" />
        <Radio label="two" name="testRadio" value="two" disabled />
        <div className="mt-8">
          <button type="submit" className={styles.button}>
            Add
          </button>
        </div>
      </Form>
    </Formik>
  );
}
