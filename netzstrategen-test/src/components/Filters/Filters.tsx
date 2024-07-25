'use client'

export function Filters({callback}: {callback: Function}) {
    const onInputChange = ()=> {

    }


    return (
        <div>
            <input
                type={'radio'}
                id="water"
                onChange={(e)=> callback(e.target.id)}
                name={'filters'}
            />
            <label
                htmlFor="water"
            >
                water
            </label>

            <input
                type={'radio'}
                id="fire"
                onChange={(e)=> callback(e.target.id)}
                name={'filters'}
            />
            <label
                htmlFor="fire"
            >
                fire
            </label>
        </div>
    )
}