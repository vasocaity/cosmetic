/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import RadioGroup from './RadioGroup';

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
        testRadio: '1',
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
        <div className="mt-2">
          <RadioGroup
            radios={[
              {
                label: '1',
                name: 'testRadio',
                value: '1',
              },
              {
                label: '2',
                name: 'testRadio',
                value: '2',
                disabled: true,
              },
            ]}
          />
        </div>
        <div className="mt-8">
          <button type="submit" className={styles.button}>
            Add
          </button>
        </div>
      </Form>
    </Formik>
  );
}
