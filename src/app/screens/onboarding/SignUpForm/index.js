import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Dropdown from '@common/Dropdown';
import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import SectionTitle from '@common/SectionTitle';
import Button from '@common/Button';
import fileToBase64 from '@utils/fileToBase64';
import addProfilePicture from '@images/add-profile-picture.svg';

import { currencyOptions } from './mocks';

const TextInput = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { sizeClassName = 'text-sm', ...otherProps } = props;
  return (
    <input
      ref={ref}
      className={`border-b w-full font-gotham-book text-blue-gray ${sizeClassName} bg-transparent py-2 `}
      type="text"
      {...otherProps}
    />
  );
});

const SignUpForm = () => {
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const [currencyOption, setCurrencyOption] = useState({
    id: null,
    label: 'Select Currency',
  });
  const [photoURL, setPhotoURL] = useState(null);
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  });
  const history = useHistory();
  const { isValid } = formState;
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} bgClassName="bg-gray-50" />
  );
  const onChangeImage = async (e) => {
    const { files } = e.target;
    const file = files?.[0] ?? null;
    try {
      setPhotoURL(await fileToBase64(file));
    } catch (err) {
      // TODO: Handle error
    }
  };
  const onSelectCurrencyOption = (optionSelected) => {
    setCurrencyOption(optionSelected);
    setShowCurrencyOptions(false);
  };
  const onClickCreateAccount = () => {
    // TODO: Call API service
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent} className="md:h-screen">
      <div className="px-4 pb-5 bg-gray-50">
        <div className="flex justify-center">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="inline-block cursor-pointer">
            <input
              className="hidden"
              type="file"
              onChange={onChangeImage}
              accept="image/x-png,image/jpeg,image/gif"
              onClick={(e) => {
                e.target.value = null;
              }}
            />
            <div className="w-32 h-32 rounded-full bg-gray-400 relative">
              {photoURL && (
                <img
                  className="cursor-pointer w-32 h-32 rounded-full"
                  src={photoURL}
                  alt="add-button"
                />
              )}
              <img
                className="absolute bottom-0 right-0"
                src={addProfilePicture}
                alt=""
              />
            </div>
          </label>
        </div>

        <div className="px-3 pt-7 pb-12">
          <form>
            <div className="mb-8">
              <SectionTitle label="Name" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-8">
              <SectionTitle label="Email" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-8">
              <SectionTitle label="Phone Number" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="phoneNumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="mb-8 flex flex-col">
              <SectionTitle label="Date of Birth" className="mb-1" />
              <input
                type="date"
                name="birthdate"
                ref={register({ required: true })}
                className="no-calendar font-gotham-book text-blue-gray text-xs py-2 border-b w-auto"
              />
            </div>
            <div className="mb-8">
              <SectionTitle label="Home Address" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="address1"
                placeholder="Enter Address 1"
                sizeClassName="text-xs"
              />
              <TextInput
                ref={register({ required: true })}
                name="address2"
                placeholder="Enter Address 2"
                sizeClassName="text-xs"
              />
            </div>
            <div className="mb-12">
              <SectionTitle label="Preferred Currency" className="mb-1" />
              <Dropdown
                className="py-3 justify-start border-b bg-gray-50"
                imageClassName="h-3 w-3 right-2"
                labelClassName="font-gotham-book text-xs ml-3"
                onClick={() => setShowCurrencyOptions(!showCurrencyOptions)}
                value={currencyOption.label}
                selected={currencyOption.id !== null}
                showOptions={showCurrencyOptions}
                options={currencyOptions}
                onSelect={onSelectCurrencyOption}
              />
            </div>
          </form>
        </div>
        <Button
          className="sm:w-2/6 w-full text-base font-gotham-black"
          label="Done"
          disabled={!(isValid && photoURL && currencyOption.id)}
          onClick={handleSubmit(onClickCreateAccount)}
        />
      </div>
    </ScreenContainer>
  );
};

export default SignUpForm;
