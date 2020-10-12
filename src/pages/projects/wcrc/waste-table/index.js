import React, { Component } from "react";
import TextHeader from "../../../../components/text-header";
import "./index.css";

export default class WasteTable extends Component {
    render() {
        return (
            <div className="waste-block">
                <TextHeader>We Accept:</TextHeader>
                <div className="waste-block-title"></div>
                <div className="waste-table-container">
                    <table className="waste-table">
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Cost</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Glass bottles</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Metal cans</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Paper</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Car or truck batteries</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Cardboard (a few pieces)</td>
                                <td>$0.50 - $1</td>
                            </tr>
                            <tr>
                                <td>Cardboard (a boot load)</td>
                                <td>$2</td>
                            </tr>
                            <tr>
                                <td>Cardboard (a ute load)</td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td>All plastics (per 20 litres)</td>
                                <td>$2</td>
                            </tr>
                            <tr>
                                <td>Polystyrene (per 60 litre bag)</td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td>Household batteries (per kg)</td>
                                <td>$5.50</td>
                            </tr>
                            <tr>
                                <td>CRT TV</td>
                                <td>$40</td>
                            </tr>
                            <tr>
                                <td>Flat Panel TV</td>
                                <td>$25</td>
                            </tr>
                            <tr>
                                <td>CRT Computer Monitor</td>
                                <td>$20</td>
                            </tr>
                            <tr>
                                <td>LCD Computer Monitor</td>
                                <td>$12</td>
                            </tr>
                            <tr>
                                <td>Desktop and Server PC's</td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td>Laptops</td>
                                <td>$6</td>
                            </tr>
                            <tr>
                                <td>Modems, switches, routers, speakers (per unit)</td>
                                <td>$6</td>
                            </tr>
                            <tr>
                                <td>Disk data destruction (per drive)</td>
                                <td>$15</td>
                            </tr>
                            <tr>
                                <td>UPS (uninerrupted power supply)</td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td>Laptop battery (only)</td>
                                <td>$6</td>
                            </tr>
                            <tr>
                                <td>Small appliances (anything with an electrical cord)</td>
                                <td>$7</td>
                            </tr>
                            <tr>
                                <td>Heaters</td>
                                <td>$7</td>
                            </tr>
                            <tr>
                                <td>Vacuums</td>
                                <td>$12</td>
                            </tr>
                            <tr>
                                <td>Microwaves</td>
                                <td>$12</td>
                            </tr>
                            <tr>
                                <td>DVD and VCR players</td>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <td>Stereo Systems & Gaming Consoles</td>
                                <td>$7</td>
                            </tr>
                            <tr>
                                <td>Stereo Speakers (per unit)</td>
                                <td>$4</td>
                            </tr>
                            <tr>
                                <td>Freezers, Fridges, AC</td>
                                <td>$45</td>
                            </tr>
                            <tr>
                                <td>Washing Machines, Dishwashers</td>
                                <td>$29</td>
                            </tr>
                            <tr>
                                <td>Keyboards and Docking Stations</td>
                                <td>$4</td>
                            </tr>
                            <tr>
                                <td>Mice</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Cell Phones</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>GPS Units and Digital Cameras</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>E-Waste Plastic, dismantled or scrap (per kg)</td>
                                <td>$0.40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
