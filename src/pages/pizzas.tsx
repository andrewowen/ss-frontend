import React, { FC } from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
import { Pizza } from '../components/PizzaList';

export const pageQuery = graphql`
  query AllPizzas {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        price
        slug {
          current
        }
        toppings {
          id
          name
          vegetarian
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

type PizzasQuery = {
  pizzas: {
    nodes: Pizza[];
  };
};

type Props = {
  data: PizzasQuery;
};

const PizzasPage: FC<Props> = ({ data }) => {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default PizzasPage;
