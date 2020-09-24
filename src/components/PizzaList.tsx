import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';
import styled from 'styled-components';

type Topping = {
  id: string;
  name: string;
  vegetarian: boolean;
};

export type Pizza = {
  id: string;
  image: {
    asset: {
      fluid: FluidObject | FluidObject[];
    };
  };
  name: string;
  price: number;
  slug?: {
    current?: string;
  };
  toppings?: Topping[];
};

type Props = {
  pizzas: Pizza[];
};

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PizzaStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

const SinglePizza = ({ pizza }: { pizza: Pizza }) => {
  const { name, toppings, image } = pizza;
  const isVegetarian = toppings?.every(
    (topping: Topping) => topping?.vegetarian
  );
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug?.current}`}>
        <h2>
          <span className="mark">
            {name} {isVegetarian ? `🌱` : ``}
          </span>
        </h2>
      </Link>
      <p>{toppings?.map((topping: Topping) => topping?.name).join(`, `)}</p>
      <Img fluid={image.asset.fluid} alt={name} />
    </PizzaStyles>
  );
};

const PizzaList: FC<Props> = ({ pizzas }) => {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
};

export default PizzaList;
