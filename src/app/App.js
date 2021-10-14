import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            descripcion: '',
            valor_unitario: '',
            estado: '',
            productos: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addProducto = this.addProducto.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
    
    addProducto(e) {
        e.preventDefault();
        if(this.state._id) {
            fetch(`/api/producto/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    descripcion: this.state.descripcion,
                    valor_unitario: this.state.valor_unitario,
                    estado: this.state.estado
                }),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
                .then(res => res.json())
                .then(data => {
                  window.M.toast({html: 'Producto Editado'});
                  this.setState({_id: '', descripcion: '', valor_unitario: '', estado: ''});
                  this.fetchProducto();
                });
        }else {
            fetch('/api/producto/', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({html: 'Producto Guardado'});
                    this.setState({descripcion: '', valor_unitario: '', estado: ''})
                    this.fetchProducto();
                })
                .catch(err => console.error(err));
        }
    }

    editProductos(id) {
        fetch(`/api/producto/${id}`)
          .then(res => res.json())
          .then(data => {
              console.log(data)
            this.setState({
                descripcion: data.descripcion,
                valor_unitario: data.valor_unitario,
                estado: data.estado,
                _id: data._id
            })
        });
      }

    componentDidMount() {
        this.fetchProducto();
    }

    fetchProducto() {
        fetch('/api/productos/')
        .then(res => res.json())
        .then(data => {
        this.setState({productos: data});
        console.log(this.state.productos);
      });
    }

    render() {
        return (
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Tienda de Zapatos Aladdín</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addProducto}>
                                        <div className="row">
                                            <div className="input-field col
                                            s12">
                                                <input name="descripcion" onChange={this.handleChange} value={this.state.descripcion} type="text" placeholder="Descripción Producto"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col
                                            s12">
                                                <input name="valor_unitario" onChange={this.handleChange} value={this.state.valor_unitario} type="text" placeholder="Valor Unitario"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col
                                            s12">
                                                <input name="estado" onChange={this.handleChange} value={this.state.estado} type="text" placeholder="Estado"/>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darkken-4">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                        <table>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Valor Unitario</th>
                                    <th>Estado</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.productos.map(productos => {
                                    return (
                                        <tr key={productos._id}>
                                            <td>{productos.descripcion}</td>
                                            <td>{productos.valor_unitario}</td>
                                            <td>{productos.estado}</td>
                                            <td>
                                                <button onClick={() => this.editProductos(productos._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                <i className="material-icons">edit</i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;