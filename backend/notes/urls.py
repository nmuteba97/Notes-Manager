from django.urls import path
from .views import NoteView

urlpatterns = [
    path('api/notes/', NoteView.as_view()),
    path('api/notes/<int:pk>/',NoteView.as_view()),
    path('api/notes/form/',NoteView.as_view())
]