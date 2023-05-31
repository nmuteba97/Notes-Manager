from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Note
from .serializers import NoteSerializer

class NoteView(APIView):

    def post(self,request):
        data = request.data
        serializer = NoteSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Note Added Successfully",safe=False)
        
        return JsonResponse("Failed To Add Note", safe=False)
    
    def get_note(self,pk):
        try:
            note = Note.objects.get(noteId = pk)
            return note
        except Note.DoesNotExist:
            raise Http404
    
    def get(self,request,pk = None):
        if pk:
            data = self.get_note(pk)
            serializer = NoteSerializer(data)
        else:
            data = Note.objects.all()
            serializer = NoteSerializer(data,many = True)

        return Response(serializer.data)
    
    def put(self,request,pk = None):
        note_index = Note.objects.get(noteId = pk)
        serializer = NoteSerializer(instance=note_index,data=request.data,partial= True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Note updated Successfully", safe=False)
        return JsonResponse("Failed To Update Note")
    
    def delete(self,requst,pk):
        note_index = Note.objects.get(noteId = pk)
        note_index.delete()
        return JsonResponse('Note Deleted Successfully', safe=False)
    

