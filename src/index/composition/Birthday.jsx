// import React from 'react';
import PropTypes from 'prop-types';

function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString('fr-FR', options);
}

function BirthDate({ date }) {
  return <span>{formatDate(date)}</span>;
}

// Valider les types de props avec PropTypes
BirthDate.propTypes = {
  date: PropTypes.any.isRequired, // date est de type 'any' et est requis
};

export default BirthDate;
