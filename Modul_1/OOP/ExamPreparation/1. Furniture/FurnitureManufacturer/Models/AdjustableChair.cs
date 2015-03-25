﻿namespace FurnitureManufacturer.Models
{
    using FurnitureManufacturer.Interfaces;

    public class AdjustableChair : Chair, IFurniture, IChair, IAdjustableChair
    {        
        public AdjustableChair(string model, string material, decimal price, decimal height, int numberOfLegs)
            : base(model, material, price, height, numberOfLegs)
        {
        }

        public void SetHeight(decimal height)
        {
            this.Height = height;
        }
    }
}
