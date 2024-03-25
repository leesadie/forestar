'use client';

import Container from "../Container";

import { BsSquare } from 'react-icons/bs';
import { FaDog, FaChild } from 'react-icons/fa';
import { GrWheelchair } from 'react-icons/gr';
import CategoryBox from "../CategoryBox";

import { useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Dog Friendly',
        icon: FaDog,
        description: 'This route is dog friendly'
    },
    {
        label: 'Wheelchair Friendly',
        icon: GrWheelchair,
        description: 'This route is wheelchair friendly'
    },
    {
        label: 'Stroller Friendly',
        icon: FaChild,
        description: 'This route is stroller friendly'
    },
    {
        label: 'Fully Paved',
        icon: BsSquare,
        description: 'This route is paved'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');

    return (
        <Container>
            <div
                className="
                    pt-2
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;