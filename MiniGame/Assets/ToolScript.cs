using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ToolScript : MonoBehaviour
{
    public bool Selected = false;
    public bool isEraser;
    public bool isPaint;
    public Color color1 = Color.white;
    // Use this for initialization

    void Start()
        {

    }

    void Update()
    {
        if (!Selected)
        {
            transform.GetChild(0).gameObject.SetActive(false);
        }
        else
        {
            transform.GetChild(0).gameObject.SetActive(true);

        }
    }
    
    
}
