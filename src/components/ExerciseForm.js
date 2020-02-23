import React from 'react'

class ExerciseForm extends React.Component{

    render(){
        const {onChange, onSubmit, form} = this.props

        return(
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group row">
                        <label htmlFor="txtTitulo" className="col-md-12">Titulo</label>
                        <input type="text" className="form-control col-md-12" name="txtTitulo" placeholder="Ingrese un titulo" maxLength="25" onChange={onChange} value={form.txtTitle}></input>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="txtDescripcion" className="col-md-12">Descripción</label>
                        <textarea type="text" className="form-control col-md-12" name="txtDescripcion" placeholder="Ingrese la descripción del ejercicio" onChange={onChange} value={form.txtDescripcion} rows="4" cols="50" maxLength="300"></textarea>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="txtImagenRuta" className="col-md-12">Ruta imagen</label>
                        <input type="text" className="form-control col-md-12" name="txtImagenRuta" placeholder="Ingrese la ruta de la imagen" onChange={onChange} value={form.txtImagenRuta}></input>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="txtColorIzquierdo" className="col-md-5">Seleccione el color izquierdo</label>
                        <input type="color" className="form-control col-md-1" name="txtColorIzquierdo" placeholder="Ingrese un color" onChange={onChange} value={form.txtColorIzquierdo}></input>

                        <label htmlFor="txtColorDerecho" className="col-md-5">Seleccione el color derecho</label>
                        <input type="color" className="form-control col-md-1" name="txtColorDerecho" placeholder="Ingrese un color" onChange={onChange} value={form.txtColorDerecho}></input>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="form-control col-md-4 btn-md btn-success" id="btnGuardar" placeholder="Ingrese un color" >Guardar ejercicio</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExerciseForm