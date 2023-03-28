export interface IStudents {
    id: string;
    nombre: string;
    curso: string;
    calificaciones: {
        PrimerCuatr: string;
        SegundoCuatr: string;
    };
}