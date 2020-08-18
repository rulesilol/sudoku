/* eslint-disable */
import { solutions } from './solver';
import React from 'react';
import './sudoku.css'
import SudokuToolCollection from 'sudokutoolcollection';
const sudoku = SudokuToolCollection();



class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.solve = this.solve.bind(this);
    // }
    state = {
        cell_01: "", cell_02: "", cell_03: "", cell_04: "", cell_05: "", cell_06: "", cell_07: "", cell_08: "", cell_09: "",
        cell_10: "", cell_11: "", cell_12: "", cell_13: "", cell_14: "", cell_15: "", cell_16: "", cell_17: "", cell_18: "",
        cell_19: "", cell_20: "", cell_21: "", cell_22: "", cell_23: "", cell_24: "", cell_25: "", cell_26: "", cell_27: "",
        cell_28: "", cell_29: "", cell_30: "", cell_31: "", cell_32: "", cell_33: "", cell_34: "", cell_35: "", cell_36: "",
        cell_37: "", cell_38: "", cell_39: "", cell_40: "", cell_41: "", cell_42: "", cell_43: "", cell_44: "", cell_45: "",
        cell_46: "", cell_47: "", cell_48: "", cell_49: "", cell_50: "", cell_51: "", cell_52: "", cell_53: "", cell_54: "",
        cell_55: "", cell_56: "", cell_57: "", cell_58: "", cell_59: "", cell_60: "", cell_61: "", cell_62: "", cell_63: "",
        cell_64: "", cell_65: "", cell_66: "", cell_67: "", cell_68: "", cell_69: "", cell_70: "", cell_71: "", cell_72: "",
        cell_73: "", cell_74: "", cell_75: "", cell_76: "", cell_77: "", cell_78: "", cell_79: "", cell_80: "", cell_81: "",
    }

    resetForm = () => {
        this.setState({
            cell_01: "", cell_02: "", cell_03: "", cell_04: "", cell_05: "", cell_06: "", cell_07: "", cell_08: "", cell_09: "",
            cell_10: "", cell_11: "", cell_12: "", cell_13: "", cell_14: "", cell_15: "", cell_16: "", cell_17: "", cell_18: "",
            cell_19: "", cell_20: "", cell_21: "", cell_22: "", cell_23: "", cell_24: "", cell_25: "", cell_26: "", cell_27: "",
            cell_28: "", cell_29: "", cell_30: "", cell_31: "", cell_32: "", cell_33: "", cell_34: "", cell_35: "", cell_36: "",
            cell_37: "", cell_38: "", cell_39: "", cell_40: "", cell_41: "", cell_42: "", cell_43: "", cell_44: "", cell_45: "",
            cell_46: "", cell_47: "", cell_48: "", cell_49: "", cell_50: "", cell_51: "", cell_52: "", cell_53: "", cell_54: "",
            cell_55: "", cell_56: "", cell_57: "", cell_58: "", cell_59: "", cell_60: "", cell_61: "", cell_62: "", cell_63: "",
            cell_64: "", cell_65: "", cell_66: "", cell_67: "", cell_68: "", cell_69: "", cell_70: "", cell_71: "", cell_72: "",
            cell_73: "", cell_74: "", cell_75: "", cell_76: "", cell_77: "", cell_78: "", cell_79: "", cell_80: "", cell_81: "",
        }, function () { })
    }

    changeCells = (value, id) => {
        this.setState({ [id]: value }, function () { /* Maybe write a checker later so we only allow for 1 digit */
            // console.log(this.state)
        })
    }

    fillGrid = (difficulty) => {
        this.resetForm()
        const string = sudoku.generator.generate(`${difficulty}`)
        // console.log(string)
        for (var i = 0; i < string.length; i++) {
            if (string.charAt(i) !== '.') {
                if (i >= 9) {
                    var currentCell = `cell_${i + 1}`
                    this.setState({ [currentCell]: string.charAt(i) }, function () {
                        // console.log(this.state)
                    })
                } else {
                    var currentCell = `cell_0${i + 1}`
                    this.setState({ [currentCell]: string.charAt(i) }, function () {
                        // console.log(this.state)
                    })
                }

            }
        }
    }

    setStateWithString = (string) => {
        // console.log(string)
        for (var i = 0; i < string.length; i++) {
            if (string.charAt(i) !== '0') {
                if (i >= 9) {
                    var currentCell = `cell_${i + 1}`
                    this.setState({ [currentCell]: string.charAt(i) }, function () {
                        // console.log(this.state)
                    })
                } else {
                    var currentCell = `cell_0${i + 1}`
                    this.setState({ [currentCell]: string.charAt(i) }, function () {
                        // console.log(this.state)
                    })
                }
            }
        }
    }



    solve = () => {
        var values = Object.values(this.state)
        var stringWithZeros = ""

        for (const [key, value] of Object.entries(values)) {
            if (value === "") {
                stringWithZeros += '0'
            } else {
                stringWithZeros += (`${value}`);
            }
        }
        // console.log(this.state)
        // console.log(values, values[0], values[1], values[2], values[3], values.length)
        // console.log(string.length, string)
        // console.log(stringWithZeros.length, stringWithZeros)


        // console.log(stringWithZeros.length)

        var array = [[], [], [], [], [], [], [], [], []]
        var current = 0
        for (var i = 0; i < stringWithZeros.length; i++) {
            if (array[current].length < 9) {
                array[current].push(parseInt(stringWithZeros.charAt(i)))
                // console.log(array)
            } else {
                current = current += 1
                array[current].push(parseInt(stringWithZeros.charAt(i)))
            }
        }

        // var gameArr = array
        // console.log(gameArr)
        var solution = solutions(stringWithZeros)
        // console.log(solution)


        for (let i = 0; i < solution.length; i++) {
            console.log(solution[i][0].replace(/,/g, ''))
            setTimeout(() => {
                this.setStateWithString(solution[i][0].replace(/,/g, ''))
            }, 1);
        }

        // Solver Start

        //Solver End

        // for (var i = 0; i < solution.length; i++) {
        //     this.setStateWithString(solution[i][0].replace(/,/g, ''))

        // }
    }




    render() {
        return (
            <div>
                <div>
                    <h1 id="heading" className="ui header"><i class="settings icon"></i>Sudoku Solver</h1>
                </div>
                <div id="container">
                    <div className="ui input"><input id="cell_01" className="inputSquare" type="number" value={this.state.cell_01} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_10" className="inputSquare" type="number" value={this.state.cell_10} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_19" className="inputSquare" type="number" value={this.state.cell_19} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_28" className="inputSquare" type="number" value={this.state.cell_28} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_37" className="inputSquare" type="number" value={this.state.cell_37} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_46" className="inputSquare" type="number" value={this.state.cell_46} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_55" className="inputSquare" type="number" value={this.state.cell_55} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_64" className="inputSquare" type="number" value={this.state.cell_64} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_73" className="inputSquare" type="number" value={this.state.cell_73} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_02" className="inputSquare" type="number" value={this.state.cell_02} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_11" className="inputSquare" type="number" value={this.state.cell_11} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_20" className="inputSquare" type="number" value={this.state.cell_20} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_29" className="inputSquare" type="number" value={this.state.cell_29} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_38" className="inputSquare" type="number" value={this.state.cell_38} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_47" className="inputSquare" type="number" value={this.state.cell_47} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_56" className="inputSquare" type="number" value={this.state.cell_56} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_65" className="inputSquare" type="number" value={this.state.cell_65} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_74" className="inputSquare" type="number" value={this.state.cell_74} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_03" className="inputSquare" type="number" value={this.state.cell_03} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_12" className="inputSquare" type="number" value={this.state.cell_12} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_21" className="inputSquare" type="number" value={this.state.cell_21} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_30" className="inputSquare" type="number" value={this.state.cell_30} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_39" className="inputSquare" type="number" value={this.state.cell_39} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_48" className="inputSquare" type="number" value={this.state.cell_48} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_57" className="inputSquare" type="number" value={this.state.cell_57} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_66" className="inputSquare" type="number" value={this.state.cell_66} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_75" className="inputSquare" type="number" value={this.state.cell_75} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_04" className="inputSquare" type="number" value={this.state.cell_04} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_13" className="inputSquare" type="number" value={this.state.cell_13} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_22" className="inputSquare" type="number" value={this.state.cell_22} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_31" className="inputSquare" type="number" value={this.state.cell_31} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_40" className="inputSquare" type="number" value={this.state.cell_40} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_49" className="inputSquare" type="number" value={this.state.cell_49} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_58" className="inputSquare" type="number" value={this.state.cell_58} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_67" className="inputSquare" type="number" value={this.state.cell_67} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_76" className="inputSquare" type="number" value={this.state.cell_76} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_05" className="inputSquare" type="number" value={this.state.cell_05} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_14" className="inputSquare" type="number" value={this.state.cell_14} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_23" className="inputSquare" type="number" value={this.state.cell_23} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_32" className="inputSquare" type="number" value={this.state.cell_32} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_41" className="inputSquare" type="number" value={this.state.cell_41} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_50" className="inputSquare" type="number" value={this.state.cell_50} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_59" className="inputSquare" type="number" value={this.state.cell_59} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_68" className="inputSquare" type="number" value={this.state.cell_68} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_77" className="inputSquare" type="number" value={this.state.cell_77} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_06" className="inputSquare" type="number" value={this.state.cell_06} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_15" className="inputSquare" type="number" value={this.state.cell_15} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_24" className="inputSquare" type="number" value={this.state.cell_24} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_33" className="inputSquare" type="number" value={this.state.cell_33} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_42" className="inputSquare" type="number" value={this.state.cell_42} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_51" className="inputSquare" type="number" value={this.state.cell_51} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_60" className="inputSquare" type="number" value={this.state.cell_60} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_69" className="inputSquare" type="number" value={this.state.cell_69} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_78" className="inputSquare" type="number" value={this.state.cell_78} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_07" className="inputSquare" type="number" value={this.state.cell_07} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_16" className="inputSquare" type="number" value={this.state.cell_16} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_25" className="inputSquare" type="number" value={this.state.cell_25} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_34" className="inputSquare" type="number" value={this.state.cell_34} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_43" className="inputSquare" type="number" value={this.state.cell_43} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_52" className="inputSquare" type="number" value={this.state.cell_52} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_61" className="inputSquare" type="number" value={this.state.cell_61} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_70" className="inputSquare" type="number" value={this.state.cell_70} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_79" className="inputSquare" type="number" value={this.state.cell_79} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_08" className="inputSquare" type="number" value={this.state.cell_08} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_17" className="inputSquare" type="number" value={this.state.cell_17} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_26" className="inputSquare" type="number" value={this.state.cell_26} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_35" className="inputSquare" type="number" value={this.state.cell_35} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_44" className="inputSquare" type="number" value={this.state.cell_44} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_53" className="inputSquare" type="number" value={this.state.cell_53} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_62" className="inputSquare" type="number" value={this.state.cell_62} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_71" className="inputSquare" type="number" value={this.state.cell_71} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_80" className="inputSquare" type="number" value={this.state.cell_80} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                    <div className="ui input"><input id="cell_09" className="inputSquare" type="number" value={this.state.cell_09} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_18" className="inputSquare" type="number" value={this.state.cell_18} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_27" className="inputSquare" type="number" value={this.state.cell_27} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_36" className="inputSquare" type="number" value={this.state.cell_36} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_45" className="inputSquare" type="number" value={this.state.cell_45} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_54" className="inputSquare" type="number" value={this.state.cell_54} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_63" className="inputSquare" type="number" value={this.state.cell_63} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_72" className="inputSquare" type="number" value={this.state.cell_72} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>
                    <div className="ui input"><input id="cell_81" className="inputSquare" type="number" value={this.state.cell_81} onChange={e => this.changeCells(e.target.value, e.target.id)} /></div>

                </div>
                <div id="controlPanel">
                    <button className="ui button" onClick={this.solve}>Solve</button>
                    <button className="ui button" onClick={this.resetForm}>Reset</button>
                    
                </div>
                <div id="difficultyPanel">
                <button className="ui button" value="medium" onClick={e => this.fillGrid(e.target.value)}>Easy</button>
                <button className="ui button" value="very-hard" onClick={e => this.fillGrid(e.target.value)}>Medium</button>
                <button className="ui button" value="inhuman" onClick={e => this.fillGrid(e.target.value)}>Hard</button>
                </div>

            </div>

        )
    }
}

export default App;