import { BiEdit } from "react-icons/bi";  
import { AiFillDelete } from "react-icons/ai";
import { notesAPI } from "../services/notesAPI"
import { useState, useEffect } from "react"
import AlertBox from "../components/AlertBox"
import EmptyState from "../components/EmptyState"
import LoadingSpinner from "../components/LoadingSpinner"
import GenericTable from "../components/GenericTable"


export default function Notes() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])
    const [dataForm, setDataForm] = useState({
        title: "", content: "", status: ""
    })
    const [editingNoteId, setEditingNoteId] = useState(null)

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    // Handle form submission for creating notes
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.createNote(dataForm)

            setSuccess("Catatan berhasil ditambahkan!")

            // Kosongkan Form setelah Success
            setDataForm({ title: "", content: "", status: "" })

            // Hilangkan pesan Success setelah 3 detik
            setTimeout(() => setSuccess(""), 3000)

            //Panggil Ulang loadNotes untuk refresh data
            loadNotes()

        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false)
        }
    }

    // Load data saat pertama di-render
    useEffect(() => {
        loadNotes()
    }, [])

    // Memanggil fetchNotes beserta error/loading handling
    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    // Handle untuk aksi hapus data
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)

            // Refresh data
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    const handleEditClick = (note) => {
        setEditingNoteId(note.id)
        setDataForm({
            title: note.title,
            content: note.content,
            status: note.status || ""
        })
        setSuccess("")
        setError("")
    }

    const handleCancelEdit = () => {
        setEditingNoteId(null)
        setDataForm({ title: "", content: "", status: "" })
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.updateNote(editingNoteId, dataForm)

            setSuccess("Catatan berhasil diperbarui!")
            setEditingNoteId(null)
            setDataForm({ title: "", content: "", status: "" })
            setTimeout(() => setSuccess(""), 3000)
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Notes App
                </h2>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}

            {success && <AlertBox type="success">{success}</AlertBox>}

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Tambah Catatan Baru
                </h3>

                <form onSubmit={editingNoteId ? handleUpdate : handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        onChange={handleChange}
                        disabled={loading}
                        required
                        rows="2"
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200 resize-none"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
                    >
                        {loading ? "Mohon Tunggu..." : "Tambah Data"}
                    </button>

                    {editingNoteId && (
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="ml-4 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold
                            rounded-2xl transition-all duration-200"
                        >
                            Batal Edit
                        </button>
                    )}

                </form>
            </div>

            {/* Notes Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4 ">
                    <h3 className="text-lg font-semibold">
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>
                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && (
                    <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                )}

                {!loading && notes.length === 0 && error && (
                    <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
                )}

                {!loading && notes.length > 0 ? (
                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    {index + 1}.
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-emerald-600">
                                        {note.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">
                                        {note.content}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">
                                        <button
                                            onClick={() => handleEditClick(note)}
                                            disabled={loading}
                                        >
                                            <BiEdit className="text-green-400 text-2xl hover:text-green-600 transition-colors"/>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            disabled={loading}
                                        >
                                            <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                                        </button>
                                        
                                    </div>
                                </td>
                            </>
                        )}
                    />) : null}
            </div>
        </div>
    )
}