import {
  Button,
  Fade,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  Tooltip,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { NotAllowedIcon, CheckIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { IForm } from '../../interfaces/IForm';
import { IRootState } from '../../interfaces/IRootState';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const RequestForm = React.memo(() => {
  const { width } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      send: 'Send',
      email: 'You E-mail',
      name: 'You name',
      organization: 'You organization',
      message: 'Message',
      incorrectEmail: 'Incorrect E-mail',
      tooShort: 'Too short',
      tooLong: 'Too long',
    },
    RU: {
      send: 'Отправить',
      email: 'Ваш E-mail',
      name: 'Ваше имя',
      organization: 'Ваша организация',
      message: 'Сообщение',
      incorrectEmail: 'Неверный E-mail',
      tooShort: 'Слишком коротко',
      tooLong: 'Слишком длинно',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  const [isLargerThan1026] = useMediaQuery('(min-width: 1026px)');

  const [formSended, setFormSended] = useState(false);

  const FormSchema = Yup.object().shape({
    email: Yup.string().email(texts.getString('incorrectEmail', lang)),
    name: Yup.string().min(2, texts.getString('tooShort', lang)).max(64, texts.getString('tooLong', lang)),
  });

  const handleFormSubmit = (values: IForm) => {
    const templateParams = {
      from_name: `Имя: ${values.name}`,
      message: `Компания:${values.company}\nПочта:${values.email}\n\n ${values.message}`,
    };
    emailjs.send('service_o2o7lv8', 'template_ku4abtk', templateParams, 'LVGCFsqn0SN4Bv466');
    setFormSended(true);
    setTimeout(() => {
      setFormSended(false);
    }, 5000);
  };

  return (
    <VStack w="full">
      <Formik
        key="support-ticket"
        initialValues={
          {
            email: '',
            company: '',
            name: '',
            message: '',
          } as IForm
        }
        validationSchema={FormSchema}
        onSubmit={handleFormSubmit}
      >
        {formik => (
          <Form>
            <VStack
              spacing={[3, 4]}
              py={6}
              px={4}
              my={2}
              align="center"
              backgroundColor="brand.gray"
              borderRadius="5px"
            >
              <Field name="name">
                {({ field, form }: FieldProps<string, IForm>) => (
                  <FormControl isRequired isInvalid={!!form.values.name && !!form.errors.name}>
                    <FormLabel htmlFor="form-name" color="white" requiredIndicator={<></>} fontSize={['xs', 'sm']}>
                      {`<${texts.getString('name', lang)}>`}
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="form-name"
                        variant="brand-support"
                        fontSize={['xs', 'sm']}
                        w={isLargerThan1026 ? width / 2.5 : width - width / 10}
                      />
                      <InputRightElement>
                        <Fade in={!!form.errors.name || !!form.values.name}>
                          {form.errors.name ? (
                            <Tooltip label={form.errors.name} placement="bottom">
                              <NotAllowedIcon color="red" />
                            </Tooltip>
                          ) : (
                            <CheckIcon color="orange" />
                          )}
                        </Fade>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }: FieldProps<string, IForm>) => (
                  <FormControl isRequired isInvalid={!!form.values.email && !!form.errors.email}>
                    <FormLabel htmlFor="form-email" color="white" requiredIndicator={<></>} fontSize={['xs', 'sm']}>
                      {`<${texts.getString('email', lang)}>`}
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="form-email"
                        variant="brand-support"
                        fontSize={['xs', 'sm']}
                        w={isLargerThan1026 ? width / 2.5 : width - width / 10}
                      />
                      <InputRightElement>
                        <Fade in={!!form.errors.email || !!form.values.email}>
                          {form.errors.email ? (
                            <Tooltip label={form.errors.email} placement="bottom">
                              <NotAllowedIcon color="red" />
                            </Tooltip>
                          ) : (
                            <CheckIcon color="orange" />
                          )}
                        </Fade>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
              <Field name="company">
                {({ field, form }: FieldProps<string, IForm>) => (
                  <FormControl isRequired isInvalid={!!form.values.company && !!form.errors.company}>
                    <FormLabel htmlFor="form-company" color="white" requiredIndicator={<></>} fontSize={['xs', 'sm']}>
                      {`<${texts.getString('organization', lang)}>`}
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="form-company"
                        variant="brand-support"
                        fontSize={['xs', 'sm']}
                        w={isLargerThan1026 ? width / 2.5 : width - width / 10}
                      />
                      <InputRightElement>
                        <Fade in={!!form.errors.company || !!form.values.company}>
                          {form.errors.company ? (
                            <Tooltip label={form.errors.company} placement="bottom">
                              <NotAllowedIcon color="red" />
                            </Tooltip>
                          ) : (
                            <CheckIcon color="orange" />
                          )}
                        </Fade>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }: FieldProps<string, IForm>) => (
                  <FormControl isRequired isInvalid={!!form.values.message && !!form.errors.message}>
                    <FormLabel htmlFor="form-message" color="white" requiredIndicator={<></>} fontSize={['xs', 'sm']}>
                      {`<${texts.getString('message', lang)}>`}
                    </FormLabel>
                    <InputGroup size="md">
                      <Textarea
                        {...field}
                        id="form-message"
                        variant="brand-support"
                        fontSize={['xs', 'sm']}
                        w={isLargerThan1026 ? width / 2.5 : width - width / 10}
                        maxH="320px"
                      />
                      <InputRightElement>
                        <Fade in={!!form.errors.message}>
                          <Tooltip label={form.errors.message} placement="bottom">
                            <NotAllowedIcon color="red" />
                          </Tooltip>
                        </Fade>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
            </VStack>
            <VStack>
              <Button
                type="submit"
                w="full"
                isDisabled={
                  !formik.values.email ||
                  !formik.values.name ||
                  !formik.values.company ||
                  !formik.values.message ||
                  !!formik.errors.email ||
                  !!formik.errors.name ||
                  !!formik.errors.company ||
                  !!formik.errors.message ||
                  formSended
                }
                rightIcon={formSended ? <CheckIcon boxSize="15px" /> : <></>}
                iconSpacing={4}
                variant="brand-circle-border"
              >
                {texts.getString('send', lang)}
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
});
