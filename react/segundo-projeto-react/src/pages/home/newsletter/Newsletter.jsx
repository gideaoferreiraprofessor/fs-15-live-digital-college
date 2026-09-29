function Newsletter() {
    return (
        <>
            <div className="alert alert-warning" role="alert">
                <div className="row d-flex align-items-center">
                    <div className="col-5">
                        <p className="fs-3 fw-lighter mb-1">Novidades em primeira mão</p>
                        <p class="fw-bolder m-0">Digite seu melhor email e receber nossas novidades<br /> com promoções e descontos exclusivos para você</p>
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control form-control-sm" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-sm btn-success">Cadastrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter